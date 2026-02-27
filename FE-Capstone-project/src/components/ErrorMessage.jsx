function ErrorMessage({ message }) {
  return (
    <div className="text-center mt-10">
      <p className="text-red-500 font-semibold">
        ⚠️ {message}
      </p>
    </div>
  );
}

export default ErrorMessage;