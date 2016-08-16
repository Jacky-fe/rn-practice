package com.testapp.reactnative;

import android.support.annotation.Nullable;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by zhangkai on 16/8/11.
 */
public class MyButtonManager extends SimpleViewManager<MyButton> {

    @Override
    public String getName() {
        return "MyButton";
    }

    @Override
    @javax.annotation.Nullable
    public Map getExportedCustomDirectEventTypeConstants() {
        MapBuilder.Builder builder = MapBuilder.builder();
        builder.put("onPress", MapBuilder.of("registrationName", "onPress"));
        return builder.build();
    }

    @Override
    protected MyButton createViewInstance(ThemedReactContext context) {
        MyButton button =  new MyButton(context);

        return button;
    }

    @ReactProp(name = "text")
    public void setText(MyButton button, @Nullable String text) {

        button.setText("My Button Test");
        if (text != null) {
            CharSequence cs = text;
            button.setText(cs);
        }
    }

    @ReactProp(name = "clickable", defaultBoolean = true)
    public void setBorderRadius(MyButton button, boolean clickable) {
        button.setClickable(clickable);
    }

}
