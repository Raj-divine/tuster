import { Space, Text } from "@mantine/core";

const Detail = ({ value, label }) => {
  return (
    <div className="flex w-full sm:w-2/3 justify-between mt-6">
      <div>
        <Text className="font-semibold text-lg">{label}:</Text>
      </div>
      <Space w={20} />
      <div className="w-3/4">
        <Text className="text-lg">{value}</Text>
      </div>
    </div>
  );
};

const DetailComponent = ({ tutor }) => {
  const { age, address, gender, email, phone } = tutor;
  return (
    <div style={{ height: "400px" }} className="flex flex-col">
      <Detail value={age} label="Age" />
      <Detail value={address} label="Address" />
      <Detail value={gender} label="Gender" />
      <Detail value={email} label="Email" />
      <Detail value={phone} label="Phone" />
    </div>
  );
};

export default DetailComponent;
