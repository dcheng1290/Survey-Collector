function localtunnel {
  lt -s specialchobojai123 --port 8005
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done