interface Info {
    image: string;
    name: string;
    description: string;
}

export function Card({ image, name, description }: Info) {
    return (
        <div className="group relative block h-full cursor-pointer">
            <div className="pointer-events-none absolute inset-0 rounded-md border-2 border-dashed border-orange-200 opacity-0 transition-transform group-hover:opacity-100" />
            <div className="mb-4 flex h-full flex-col rounded-md border border-gray-900 bg-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="h-48 w-full rounded-t-md bg-cover" style={{ backgroundImage: `url(${image})` }} />
                <div className="flex grow flex-col gap-4 rounded-b-md px-4 py-2">
                    <div>
                        <p className="font-bold">{name}</p>
                        <p className="text-xs text-gray-500">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
