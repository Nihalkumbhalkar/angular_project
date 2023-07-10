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
        sh 'npm install'
        sh 'npm run build --prod'
      }
    }
    stage('Host on Localhost') {
      steps {
        sh 'npm install -g http-server'
        sh 'http-server dist/first-app -p 4500 &'
      }
    }
  }
}