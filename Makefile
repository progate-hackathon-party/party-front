.PHONY: ios android build_ios install
ios:
	npm run ios --verbose
android:
	npm run android

build_ios:
	cd ios \
	pod deintegrate \
	pod install \
	cd ..

install:
	npm install -g react-native