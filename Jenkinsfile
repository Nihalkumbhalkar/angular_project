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
        bat 'npm install -g http-server'
        bat 'http-server dist/first-app -p 4500 &'
      }
    }
  }
}