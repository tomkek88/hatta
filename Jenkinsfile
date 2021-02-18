pipeline {
 
    agent any

    stages {

        stage('build'){

            steps{
                echo 'building the application'
            }
            
        }

        stage('e2e test'){

            steps{
                sh "node_modules\.bin\cypress run "
            }
        }

        stage('deploy'){
            steps{
                echo 'deploying the application'
            }
        }

    }

}