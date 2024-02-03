import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
};

export const PostHeader = ({ title, date }: Props) => (
  <div className="max-w-3xl mx-auto">
    <h1 className="text-2xl md:text-4xl font-semibold tracking-tighter leading-tight">
      {title}
    </h1>
    <div className="mb-10">
      <DateFormatter dateString={date} />
    </div>
  </div>
);
