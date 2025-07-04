package com.anonymous.MusicPlay;


import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.uimanager.ViewManager;
import java.util.Collections;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.List;
import java.util.ArrayList;

public class MusicFilesPackage implements ReactPackage {
  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new MusicFilesModule(reactContext));
    modules.add(new PlaylistFilesModule(reactContext));
    return modules;
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }
}
