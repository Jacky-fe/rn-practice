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
    public LocalStorageModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "LocalStorage";
    }

    @ReactMethod
    public void Save(String key, String value){
        SharedPreferences sharedPerferences = this.getReactApplicationContext().getSharedPreferences("hui10", Context.MODE_PRIVATE);
        sharedPerferences.edit().putString(key, value);

    }

    @ReactMethod
    public void Load(String key, Promise promise){
        try {
            SharedPreferences sharedPerferences = this.getReactApplicationContext().getSharedPreferences("hui10", Context.MODE_PRIVATE);
            String s = sharedPerferences.getString(key, null);
            promise.resolve(s);
        } catch(Exception e) {
            promise.reject("10086", e.getMessage());
        }

    }
}
