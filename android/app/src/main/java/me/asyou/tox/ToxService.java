package me.asyou.tox;

/**
 * Created by xiaobai on 16-1-30.
 */
import android.app.Service;
import android.content.Intent;
import android.os.IBinder;

import me.asyou.tox.data.ToxSingleton;

public class ToxService extends Service {

    public ToxSingleton toxclient ;

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        toxclient = new ToxSingleton();
        toxclient.initTox(getApplicationContext());
    }

     
    @Override
    public void onDestroy() {
        super.onDestroy();
    }
}
