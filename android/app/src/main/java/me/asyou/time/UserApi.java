package me.asyou.time;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.util.Map;

import org.apache.thrift.TException;
import org.apache.thrift.transport.TTransport;
import org.apache.thrift.transport.TSocket;
import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.protocol.TProtocol;

import me.asyou.thriftUser.UserSer;

public class UserApi extends ReactContextBaseJavaModule {

  public UserSer.Client client;
  public boolean clientStatus;
  public String  addr;
  public int port;

  public UserApi(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @ReactMethod
  public void Open(String a,int p,Callback errorCallback,Callback successCallback){
    try {
        TTransport transport;
        transport = new TSocket(a, p);
        transport.open();

        TProtocol protocol = new  TBinaryProtocol(transport);
        this.client = new UserSer.Client(protocol);

        this.clientStatus = true;
        successCallback.invoke("成功打开传输通道"); 
    } catch (TException x) {
        x.printStackTrace();
        this.clientStatus = false;
        errorCallback.invoke("通道开启失败");
    }
  }

  @Override
  public String getName() {
    return "UserApi";
  }

  @ReactMethod
  public void Register(String u,Callback errorCallback,Callback successCallback) {
    try {
        if (this.clientStatus == false) {
             errorCallback.invoke("没有传输通道");
        }else{
             String rel = "";
            try {
                rel = this.client.Register(u);
            } catch (TException x) {
                x.printStackTrace();
                errorCallback.invoke("获取结果出错");
            }
            successCallback.invoke(rel); 
        }
    }catch(IllegalViewOperationException e) {
        errorCallback.invoke(e.getMessage());
    }
  }
}