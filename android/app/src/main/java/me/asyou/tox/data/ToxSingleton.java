package me.asyou.tox.data;

/**
 * Created by xiaobai on 16-1-30.
 */

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;

import me.asyou.tox.wrapper.FriendList;
import me.asyou.tox.wrapper.GroupList;
import im.tox.tox4j.core.options.ToxOptions;


public class ToxSingleton {
    public static boolean isInited;
    public static void initTox(Context ctx){
        FriendList antoxFriendList = new FriendList();
        GroupList groupList = new GroupList();

        SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(ctx);
        boolean udpEnabled = preferences.getBoolean("enable_udp", false);
        isInited=true;
        options = new ToxOptions(udpEnabled, false);
    }
}
