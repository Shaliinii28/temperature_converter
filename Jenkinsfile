pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building both projects...'
        dir(path: 'temperature_converter') {
          git(url: 'https://github.com/Shaliinii28/temperature_converter.git', branch: 'main')
        }

        dir(path: 'hospital_site') {
          git(url: 'https://github.com/Shaliinii28/Hospital-Site-for-Internship.git', branch: 'main')
        }

      }
    }

    stage('Test') {
      steps {
        echo 'Testing both sites (skipped for static HTML)...'
      }
    }

    stage('Deploy') {
      parallel {
        stage('Deploy Temperature Converter') {
          steps {
            dir(path: 'temperature_converter') {
              script {
                def site1 = docker.build("temperature-converter:${env.BUILD_ID}")
                site1.run('-p 8081:80')
              }

            }

          }
        }

        stage('Deploy Hospital Site') {
          steps {
            dir(path: 'hospital_site') {
              script {
                def site2 = docker.build("hospital-site:${env.BUILD_ID}")
                site2.run('-p 8082:80')
              }

            }

          }
        }

      }
    }

  }
  post {
    success {
      echo 'Sites deployed:'
      echo 'Temperature Converter: http://localhost:8081'
      echo 'Hospital Site for Internship: http://localhost:8082'
    }

    failure {
      echo 'Deployment failed.'
    }

  }
}