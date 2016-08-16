package com.testapp.reactnative;
import android.content.Context;
import android.content.SharedPreferences;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.testapp.MainActivity;

/**
 * Created by zhangkai on 16/8/3.
 */
public class LocalStorageModule extends ReactContextBaseJavaModule {
    SharedPreferences sharedPerferences;
    public LocalStorageModule(ReactApplicationContext reactContext) {
        super(reactContext);
        sharedPerferences = this.getReactApplicationContext().getSharedPreferences("hui10", Context.MODE_PRIVATE);
    }

    @Override
    public String getName() {
        return "LocalStorage";
    }

    @ReactMethod
    public void save(String key, String value){
        SharedPreferences.Editor editor = sharedPerferences.edit();
        editor.putString(key, value);
        editor.apply();

    }

    @ReactMethod
    public void load(String key, Promise promise){
        try {
            String s = sharedPerferences.getString(key, null);
            promise.resolve(s);
        } catch(Exception e) {
            promise.reject("10086", e.getMessage());
        }

    }
}
