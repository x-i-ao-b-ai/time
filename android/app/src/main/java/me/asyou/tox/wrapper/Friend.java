package me.asyou.tox.wrapper;

/**
 * Created by xiaobai on 16-1-30.
 */

import java.util.ArrayList;

import im.tox.tox4j.core.enums.ToxUserStatus;

public class Friend {
    public String name;
    public String key;
    public ToxUserStatus status;
    public String statusMessage;
    public boolean online;
    public boolean isTyping;
    public String nickname;
    public ArrayList<String> previousNames;
    public String avatar;
}
