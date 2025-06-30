package com.anonymous.MusicPlay;


import android.database.Cursor;
import android.provider.MediaStore;
import android.content.ContentResolver;
import android.net.Uri;
import android.content.Context;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

public class MusicFilesModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    public MusicFilesModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "MusicFiles";
    }

    @ReactMethod
    public void getMusicFiles(Promise promise) {
        WritableArray songs = Arguments.createArray();
        ContentResolver resolver = reactContext.getContentResolver();
        Uri uri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
        String selection = MediaStore.Audio.Media.IS_MUSIC + " != 0";

        int index = 0;
        Cursor cursor = resolver.query(uri, null, selection, null, null);
        if (cursor != null && cursor.moveToFirst()) {
            do {
                WritableMap song = Arguments.createMap();
                song.putInt("id", index);
                song.putString("title", cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.TITLE)));
                song.putString("artist", cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.ARTIST)));
                song.putString("path", cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.DATA)));
                songs.pushMap(song);
                index++;
            } while (cursor.moveToNext());

            cursor.close();
        }

        promise.resolve(songs);
    }
}
