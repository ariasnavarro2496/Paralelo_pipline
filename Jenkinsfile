pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente1_2"
                    }
                    steps {
                        git url: 'https://github.com/ariasnavarro2496/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key e9501a5a-c07a-4e54-82b5-9e37c69623bc  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agente1_2"
                    }
                    steps {
                        git url: 'https://github.com/ariasnavarro2496/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key e9501a5a-c07a-4e54-82b5-9e37c69623bc  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agente1_3"
                    }
                    steps {
                        git url: 'https://github.com/ariasnavarro2496/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key e9501a5a-c07a-4e54-82b5-9e37c69623bc  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agente1_4"
                    }
                    steps {
                        git url: 'https://github.com/ariasnavarro2496/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key e9501a5a-c07a-4e54-82b5-9e37c69623bc  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}