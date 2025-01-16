const BoilingVerdict = (props) => {
  if (props.temperature >= 100) {
    return <p>{props.temperature} ℃ 로 100 ℃가 넘어 물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
};

export default BoilingVerdict;
