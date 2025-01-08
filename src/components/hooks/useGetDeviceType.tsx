import { useEffect, useState } from 'react';

const getDeviceType = (): 'android' | 'iphone' | 'desktop' | 'other' => {
  const userAgent =
    navigator.userAgent || navigator.vendor || (window as any).opera;

  // Detect if the device is Android
  if (/android/i.test(userAgent)) {
    return 'android';
  }

  // Detect if the device is an iPhone or iOS
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return 'iphone';
  }

  // Detect if the device is a desktop
  if (!/android|iPhone|iPad|iPod|Mobile|Tablet/i.test(userAgent)) {
    return 'desktop';
  }

  // If not Android or iPhone, return 'other'
  return 'other';
};

export default function useGetDeviceType():
  | 'android'
  | 'iphone'
  | 'desktop'
  | 'other' {
  const [deviceType, setDeviceType] = useState<
    'android' | 'iphone' | 'desktop' | 'other'
  >('other');

  useEffect(() => {
    const type = getDeviceType();
    setDeviceType(type);
  }, []);

  return deviceType;
}
