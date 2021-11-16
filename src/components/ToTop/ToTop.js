export default function ToTop() {
  const toTopClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="to-top">
      <i onClick={toTopClick} className="uil uil-arrow-up to-top-icon"></i>
    </div>
  );
}
