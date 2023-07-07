pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Nihalkumbhalkar/angular_project.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install' 
            }
        }
    }

}