import fs from "fs";
import path from "path";

export function getGalleryImages(folder: string): string[] {
  const galleryPath = path.join(
    process.cwd(),
    "public",
    "images",
    folder
  );

  if (!fs.existsSync(galleryPath)) {
    return [];
  }

  return fs
    .readdirSync(galleryPath)
    .filter((file) =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    )
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    )
    .map((file) => `/images/${folder}/${file}`);
}