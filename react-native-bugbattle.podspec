require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-bugbattle"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  A React Native wrapper around the native BugBattle SDKs
                   DESC
  s.homepage     = "https://github.com/narcitymedia/react-native-bugbattle"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "Yanick Bélanger" => "yanick@narcitymedia.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/narcitymedia/react-native-bugbattle.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency "BugBattle"
end

