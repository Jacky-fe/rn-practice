package com.testapp.reactnative;

import android.view.View;

import android.widget.Button;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.logging.Level;
import java.util.logging.Logger;


/**
 * Created by zhangkai on 16/8/11.
 */
public class MyButton extends Button implements View.OnClickListener {

    private RCTEventEmitter mEventEmitter;

    public MyButton(ThemedReactContext context) {
        super(context);
        mEventEmitter =  context.getJSModule(RCTEventEmitter.class);
        this.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        WritableMap event = Arguments.createMap();
        event.putString("message", "onPress");
        try {
            mEventEmitter.receiveEvent(getId(), "onPress", event);
        } catch(Exception err) {
            Logger.getLogger(this.getClass().getName()).log(Level.INFO, err.getMessage());
        }
    }
}
