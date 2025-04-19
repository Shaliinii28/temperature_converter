pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building the static site...'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing the site (skipped for static HTML)...'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    def site = docker.build("temperature-converter:${env.BUILD_ID}")
                    site.run('-p 8081:80')
                }
            }
        }
    }
    post {
        success {
            echo 'Site deployed at http://localhost:8081'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
