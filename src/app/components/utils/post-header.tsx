import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
};

export const PostHeader = ({ title, date }: Props) => (
  <>
    <h1 className="text-4xl tracking-tighter leading-tight">
      {title}
    </h1>
    <div className="mb-10">
      <DateFormatter dateString={date} />
    </div>
  </>
);
