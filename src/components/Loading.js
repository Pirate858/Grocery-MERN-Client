import React from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

const Loading = () => {
  const _cacheResourcesAsync = async () => {
    const images = [require('../../assets/loading_1.png')];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };
  return <AppLoading startAsync={_cacheResourcesAsync} onError={console.warn} />;
};

export default Loading;
