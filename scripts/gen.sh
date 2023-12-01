WORKPLACE="$HOME/workplace/ConnexionUserAuthDemo"
WORKSPACE="$WORKPLACE/ConnexionUserAuthDemoReactApp"
SCHEMA_PATH="$WORKPLACE/ConnexionUserAuthDemoApi/api/openapi.yaml"

(
  cd "$WORKSPACE"
  rm -rf openapi-client
  npx openapi -i "$SCHEMA_PATH" -o src/openapi-client
)
