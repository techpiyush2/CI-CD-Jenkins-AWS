node {
    def appDir = '/var/www/nextjs-app'

    stage('Clean Workspace') {
        deleteDir()
    }

    stage('Clone Repo') {
        echo 'Cloning the repo'
        git(
            branch: 'main',
            url: 'https://github.com/techpiyush2/CI-CD-Jenkins-AWS'
        )
    }

    stage('Deploy to EC2') {
        echo('Deploying to EC2')
        sh """
            sudo mkdir -p ${appDir}
            sudo chown -R jenkins:jenkins ${appDir}

            # Sync files to EC2 directory
            rsync -av --delete --exclude='.git' --exclude='node_modules' ./ ${appDir}

            cd ${appDir}
            npm install
            npm run build

            # Kill any process running on port 3000
            sudo fuser -k 3000/tcp || true

            # Start Next.js in production mode
            npm run start
        """
    }
}
