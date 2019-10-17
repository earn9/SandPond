TodeSplat`

element DReg {

	colour "brown"
	emissive "brown"
	opacity 0.3
	
	input D ({space}) => space && space.atom && space.atom.type == DReg
	input n ({space}) => space && space.atom && space.atom.type != DReg
	
	output R ({space}) => setSpaceAtom(space, makeAtom(Res))
	output D ({space}) => setSpaceAtom(space, makeAtom(DReg))
	
	rule xyz 0.001 { @_ => D@ }
	rule xyz 0.005 { @_ => R@ }
	rule xyz 0.1 { @D => _@ }
	rule xyz 0.01 { @n => _@ }
	rule xyz { @_ => _@ }
	
	// Aspirational code
	/*
	rule xyz { @_ => {
		rule xyz 0.001 { @_ => @D }
		rule xyz 0.005 { @_ => @R }
	}}
	
	rule xyz { @# => {
		rule xyz 0.1 { @D => @_ }
		rule xyz 0.01 { @n => @_ }
	}}
	*/
	
}

`
