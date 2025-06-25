package com.anonymous.MusicPlay;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ActivityEventListener;

public class PlaylistFilesModule extends ReactContextBaseJavaModule implements ActivityEventListener {

    private static final int PICK_FILE_REQUEST_CODE = 42;
    private Promise pickerPromise;

    public PlaylistFilesModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(this);  // required for onActivityResult
    }

    @Override
    public String getName() {
        return "PlaylistFilesModule";
    }

    @ReactMethod
    public void getPlaylistFiles(String playlistId, Promise promise) {
        Activity activity = getCurrentActivity();
        if (activity == null) {
            promise.reject("NO_ACTIVITY", "No activity available");
            return;
        }

        pickerPromise = promise;

        Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        intent.setType("*/*");  // Adjust this to the file type you want
        activity.startActivityForResult(intent, PICK_FILE_REQUEST_CODE);
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if (requestCode == PICK_FILE_REQUEST_CODE) {
            if (pickerPromise == null) return;

            if (resultCode == Activity.RESULT_OK && data != null) {
                Uri uri = data.getData();
                pickerPromise.resolve(uri.toString());
            } else {
                pickerPromise.reject("CANCELLED", "File picking was cancelled");
            }
            pickerPromise = null;
        }
    }

    @Override
    public void onNewIntent(Intent intent) {
        // No-op
    }
}
