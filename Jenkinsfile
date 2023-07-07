// pipeline {
//     agent any

//     stages {
//         stage('Checkout') {
//             steps {
//                 git 'https://github.com/Nihalkumbhalkar/angular_project.git'
//             }
//         }

//         stage('Build') {
//             steps {
//                 sh 'npm install' 
//             }
//         }
//     }

// }

pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the Git repository
                git 'https://github.com/Nihalkumbhalkar/angular_project.git'
            }
        }
        
        stage('Build and Test') {
            steps {
                // Install Node.js and Angular CLI if not already installed
                // sh 'curl -sL https://deb.nodesource.com/setup_14.x | bash -'
                // sh 'apt-get install -y nodejs'
                // sh 'npm install -g @angular/cli'
                
                // Install project dependencies
                sh 'npm install'
                
                // Build the Angular application
                sh 'ng build --prod'
                
                // Run tests if you have any
                // sh 'ng test'
            }
        }
        
        stage('Display Output') {
            steps {
                // Start a local server to serve the built Angular application
                sh 'npx http-server ./dist/first-app -p 8080 &'
                
                // Open the browser to view the application
                sh 'google-chrome http://localhost:8080'
                
                // You can use a different browser command if you're not using Google Chrome
                // sh 'firefox http://localhost:8080'
                
                // Wait for some time to let the application load
                sleep 10
                
                // You can add additional steps here, such as running end-to-end tests
            }
        }
    }
}
