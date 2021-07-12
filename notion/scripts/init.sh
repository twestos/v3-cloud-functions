echo "Fun times await you..."
echo "Getting environment setup..."

# gcloud config set project careerbasev3-development

# gcloud container clusters \
# get-credentials dev-cluster \
# --zone australia-southeast1-a \
# --project careerbasev3-development
gcloud secrets versions access 1 --secret="notion-secret" > env.txt && \
echo -e "GOOGLE_APPLICATION_CREDENTIALS='./service_account.json' \nNOTION_TOKEN=$(cat env.txt)" > .env && rm env.txt

gcloud secrets versions access 1 --secret="cluster-service-account" > service_account.json

# npm install