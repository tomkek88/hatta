pipeline {
 
    agent any

    stages {

        stage('build'){

            steps{
                echo 'building the application'
            }
            
        }

        stage('e2e test'){
            agent{
                node{
                    steps{
                        sh "npx cypress run "
                    }
                }
            }
            
        }

        stage('deploy'){
            steps{
                echo 'deploying the application'
            }
        }

    }

}