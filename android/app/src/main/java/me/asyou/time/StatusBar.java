package me.asyou.time;

import android.annotation.TargetApi;
import android.app.Activity;
import android.os.Build;
import android.view.Window;
import android.view.WindowManager;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.readystatesoftware.systembartint.SystemBarTintManager;


public class StatusBar extends ReactContextBaseJavaModule {

    public StatusBar(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "StatusBar";
    }

    @ReactMethod
    public void setAlpha(float val, Callback errorCallback, Callback successCallback) {
        try {
            MainActivity.setStatusBarAlpha(0.1f);
            successCallback.invoke("");
        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }
    }
}