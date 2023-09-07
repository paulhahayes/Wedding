import { FeatureTitle } from "./components/FeatureTitle";
import registry from "./data";

export default function Registry() {
  return (
    <div className="mx-auto max-w-6xl px-24 -translate-y-8 h-min-screen">
      <div className="flex w-full items-start gap-20 ">
        <div className="w-full py-24">
          <ul>
            {registry.map((item) => (
              <li key={item.id}>
                <FeatureTitle id={item.id}>{item.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky w-full flex h-screen items-center top-0">
          <div className="relative inset-0 aspect-square md:w-[400px] rounded-2xl bg-gray-100">
            {registry.map((item) => (
              <item.card id={item.id} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
