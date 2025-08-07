const ChangePointInfo = ({ info }) => (
  <div>
    <h3>Change Point Summary</h3>
    <p><b>Date:</b> {info.changepoint_date}</p>
    <p><b>Mean Before:</b> {info.mu1}</p>
    <p><b>Mean After:</b> {info.mu2}</p>
    <p><b>% Change:</b> {info.percent_change}%</p>
  </div>
);

export default ChangePointInfo;
