pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Building the static site...'
        script {
          // Build the Docker image with a unique tag
          docker.build("temperature-converter:${env.BUILD_ID}")
        }
      }
    }

    stage('Test') {
      steps {
        echo 'Testing the site (skipped for static HTML)...'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying the site...'
        script {
          // Build again and run the container
          def site = docker.build("temperature-converter:${env.BUILD_ID}")
          site.run('-d -p 8081:80')
        }
      }
    }
  }

  post {
    success {
      echo '✅ Site deployed successfully at: http://localhost:8081'
    }
    failure {
      echo '❌ Deployment failed.'
    }
  }
}
