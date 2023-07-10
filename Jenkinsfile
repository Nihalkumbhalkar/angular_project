pipeline {
  agent any
  
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Nihalkumbhalkar/angular_project.git'
      }
    } 
    
    stage('Build') {
      steps {
        bat 'npm install'
        bat 'npm run build --prod'
      }
    }
    
    stage('Host on Localhost') {
      steps {
        script {
          def httpServerInstalled = bat(returnStatus: true, script: 'http-server --version')
          if (httpServerInstalled != 0) {
            echo "http-server is already installed."
          } else {
            bat 'npm install -g http-server'
          }
        }
        bat 'start /B cmd /C "http-server dist/first-app -p 4500 > http-server.log 2>&1"'
      }
    }
    
    stage('Open in Browser') {
      steps {
        script {
          def hostIp = bat(returnStdout: true, script: 'echo %COMPUTERNAME%').trim()
          echo "Application hosted at: http://${hostIp}:4500"
        }
      }
    }
  }
}
