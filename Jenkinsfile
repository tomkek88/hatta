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
                echo 'testing the application'
                sh "npm run cypress:ci"
            }
        }

        stage('deploy'){
            steps{
                echo 'deploying the application'
            }
        }

    }

}