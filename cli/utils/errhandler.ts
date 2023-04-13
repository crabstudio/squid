function exitHandler(options: {
  cleanup?: boolean;
  message?: string;
  exit?: boolean;
}) {
  if (options.cleanup) console.log("Aborted by user");
  if (options.message) console.log(options.message);
  if (options.exit) process.exit();
}



export default exitHandler;