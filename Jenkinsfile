pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
         stage('Clone repository') { 
            steps { 
                script{
                checkout scm
                }
            }
        }

        stage('Build') { 
            steps { 
                script{
                 app = docker.build("stories")
                }
            }
        }
        stage('Deploy') {
            steps {
                script{
                    docker.withRegistry("${docker_registry_url}", "${docker_registry_credentials}") {
                        app.push("${env.BRANCH_NAME}")
                        sh "docker rmi -f ${app.imageName()}:${env.BRANCH_NAME}"
                    }
                }
            }
        }
    }
}