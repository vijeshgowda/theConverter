import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="pb-8 space-y-16">
    
      <div className="space-y-6">
        <h1 className="text-3xl font-medium text-center md:text-5xl">
          Converter
        </h1>
        <p className="text-center text-muted-foreground text-md md:text-lg md:px-24 xl:px-44 2xl:px-52">
        Free Unlimited Image, Video and Audio Converter
        </p>
      </div>
      <Dropzone />
    </div>
  );
}
