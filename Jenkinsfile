pipeline {
    agent any
 
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: 
                [[credentialsId: 'Escalera.2496', url: 'https://github.com/ariasnavarro2496/Paralelo_pipline.git']]])
            }
        }
        stage('Test'){
                            parallel{    
 
                                stage('Slave 1'){
                                
                                        agent {
                                        label "Agente1_1"
                                        }
 
                                        steps {
                                        bat 'npm install'                       
                                        bat 'npx cypress run --record --key e9501a5a-c07a-4e54-82b5-9e37c69623bc --parallel'
                                        }
                                }
 
                                stage('Slave 2'){
                                        agent {
                                        label "Agente1_2"
                                        }
 
                                        steps {
                                        bat 'npm install'                      
                                        bat 'npx cypress run --record --key e9501a5a-c07a-4e54-82b5-9e37c69623bc --parallel'
                                        }
                                    } 
 
                                stage('Slave 3'){
                                        agent {
                                        label "Agente1_3"
                                        }
 
                                        steps {
                                        bat 'npm install'                      
                                        bat 'npx cypress run --record --key e9501a5a-c07a-4e54-82b5-9e37c69623bc --parallel'
                                        }
                                    } 
 
                                stage('Slave 4'){
                                        agent {
                                        label "Agente1_4"
                                        }
 
                                        steps {
                                        bat 'npm install'                      
                                        bat 'npx cypress run --record --key e9501a5a-c07a-4e54-82b5-9e37c69623bc --parallel'
                                        }
                                }
 
                                                                
                            }
        
        }
    }
}