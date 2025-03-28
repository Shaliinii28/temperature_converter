pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building the static site...'
                // No build steps needed for static HTML
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
                    // Build Docker image
                    def site = docker.build("temperature-converter:${env.BUILD_ID}")
                    // Run container, mapping host port 8081 to container port 80
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
