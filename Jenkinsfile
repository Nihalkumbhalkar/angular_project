pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/yourusername/your-repo.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install' 
            }
        }
    }

}