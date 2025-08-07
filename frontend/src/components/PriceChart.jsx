import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const PriceChart = ({ data, changepointDate }) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <XAxis dataKey="Date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="Price" stroke="#8884d8" />
      <ReferenceLine x={changepointDate} stroke="red" label="Change Point" />
    </LineChart>
  </ResponsiveContainer>
);

export default PriceChart;
