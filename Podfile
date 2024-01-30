platform :ios, '10.0'

target 'smrt-home' do
  use_frameworks!

  pod 'React', :path => '../node_modules/react-native', :subspecs => [
    'Core',
    'CxxBridge',
    'DevSupport',
    'RCTText',
    'RCTNetwork',
    'RCTWebSocket',
    'RCTAnimation',
    'RCTImage',
    'RCTLinkingIOS',
  ]

  pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
  pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'

  pod 'React-DevSupport', :podspec => '../node_modules/react-native/React/DevSupport.podspec'
  pod 'React-cxxreact', :podspec => '../node_modules/react-native/ReactCommon/cxxreact/CxxReact.podspec'
  pod 'React-jsi', :podspec => '../node_modules/react-native/ReactCommon/jsi/jsi.podspec'
  pod 'React-jsiexecutor', :podspec => '../node_modules/react-native/ReactCommon/jsiexecutor/jsiexecutor.podspec'
  pod 'React-jsinspector', :podspec => '../node_modules/react-native/ReactCommon/jsinspector/jsinspector.podspec'
  pod 'ReactCommon/jscallinvoker', :podspec => '../node_modules/react-native/ReactCommon/jscallinvoker/JSCallInvoker.podspec'
  pod 'ReactCommon/turbomodule/core', :podspec => '../node_modules/react-native/ReactCommon/turbomodule/core/RCTTurbomoduleCore.podspec'
  pod 'ReactCommon/turbomodule/react-native-headers', :podspec => '../node_modules/react-native/ReactCommon/turbomodule/core/RCTTurbomoduleCore.podspec'
  pod 'ReactCommon/turbomodule/react-native', :podspec => '../node_modules/react-native/ReactCommon/turbomodule/react-native/RCTTurbomodule.podspec'
end
