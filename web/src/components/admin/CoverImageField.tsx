import { ImageUploadField } from "@/components/admin/ImageUploadField";

type Props = {
  name: string;
  defaultValue?: string;
};

export function CoverImageField({ name, defaultValue = "" }: Props) {
  return (
    <ImageUploadField
      name={name}
      defaultValue={defaultValue}
      label="Cover image"
      hint="Shown at the top of the article and in blog cards"
    />
  );
}
