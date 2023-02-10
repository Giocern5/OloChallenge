package com.olochallenge

import android.os.Build
import androidx.annotation.RequiresApi
import com.facebook.react.bridge.*
import java.time.LocalDate

class NoteTakerModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "NoteTakerModule"

    @RequiresApi(Build.VERSION_CODES.O)
    @ReactMethod
    fun getDummyNote(callback: Callback) {
        val noteMap = Arguments.makeNativeMap(mapOf(
            "title" to "Note Title 4",
            "body" to "Note Body 4 with a loooooooooooooong  message",
            "date" to LocalDate.now().toString()
        ))
        callback.invoke(noteMap)
    }
}


