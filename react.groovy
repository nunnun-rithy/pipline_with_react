pipeline {
    agent any

    tools {
        // Install the Nodejs for npm
        nodejs "nodejs-18.12.1"
    }
    stages {
        stage('Get Source Code From GitHub') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/Nun-SomRithy/pipline_with_react.git'
                sh 'ls -ltr'
            }
            steps('Build'){
                echo 'Build Image prepare to deploy'
                sh 'nodejs --version'
                sh 'npm --version'
                sh 'npm run build'
                sh "ls -ltr"
            }
        }
    }
}
