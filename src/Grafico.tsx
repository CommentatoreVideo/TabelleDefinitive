import { Pie } from "react-chartjs-2";

export interface GraficoProps {
	percentuali: [number, number];
}

const Grafico: React.FunctionComponent<GraficoProps> = ({ percentuali }) => {
	return (
		<Pie
			data={{
				datasets: [
					{
						data: percentuali,
						backgroundColor: ["red", "green"],
					},
				],
			}}
			options={{
				plugins: {
					tooltip: {
						callbacks: {
							label: function ({ dataIndex, formattedValue }) {
								return `${dataIndex === 0 ? "Da fare" : "Fatti"}: ${formattedValue}%`;
							},
						},
					},
				},
			}}></Pie>
	);
};

export default Grafico;
